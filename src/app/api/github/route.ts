import { NextResponse } from "next/server";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "firat404engin";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function GET() {
  if (!GITHUB_TOKEN) {
    return NextResponse.json([]);
  }

  try {
    const query = `
      query {
        user(login: "${GITHUB_USERNAME}") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                id
                name
                description
                url
                homepageUrl
                primaryLanguage {
                  name
                }
                stargazerCount
                forkCount
                repositoryTopics(first: 5) {
                  nodes {
                    topic {
                      name
                    }
                  }
                }
                updatedAt
              }
            }
          }
        }
      }
    `;

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`GitHub GraphQL API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.errors) {
      console.error("GraphQL errors:", data.errors);
      return NextResponse.json([]);
    }

    const pinnedItems = data.data?.user?.pinnedItems?.nodes || [];

    const repos = pinnedItems.map(
      (
        repo: {
          id: string;
          name: string;
          description: string | null;
          url: string;
          homepageUrl: string | null;
          primaryLanguage: { name: string } | null;
          stargazerCount: number;
          forkCount: number;
          repositoryTopics: { nodes: { topic: { name: string } }[] };
          updatedAt: string;
        },
        index: number
      ) => ({
        id: index,
        name: repo.name,
        full_name: `${GITHUB_USERNAME}/${repo.name}`,
        description: repo.description,
        html_url: repo.url,
        homepage: repo.homepageUrl,
        language: repo.primaryLanguage?.name || null,
        stargazers_count: repo.stargazerCount,
        forks_count: repo.forkCount,
        topics: repo.repositoryTopics.nodes.map(
          (t: { topic: { name: string } }) => t.topic.name
        ),
        updated_at: repo.updatedAt,
      })
    );

    return NextResponse.json(repos);
  } catch (error) {
    console.error("Failed to fetch pinned repos:", error);
    return NextResponse.json([]);
  }
}
