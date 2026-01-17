// GitHub API Service for fetching public repositories
export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  homepage: string | null;
  fork: boolean;
}

const GITHUB_USERNAME = 'AnirudhHosur';

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();
    
    // Filter out forks and return all repositories
    return repos
      .filter(repo => !repo.fork)
      .sort((a, b) => {
        // Sort by updated date (most recent first)
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      });
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

export function getLanguageColor(language: string | null): string {
  const languageColors: Record<string, string> = {
    'JavaScript': 'bg-yellow-500',
    'TypeScript': 'bg-blue-500',
    'Python': 'bg-green-500',
    'Java': 'bg-red-500',
    'Go': 'bg-cyan-500',
    'Rust': 'bg-orange-500',
    'PHP': 'bg-indigo-500',
    'Ruby': 'bg-red-600',
    'C++': 'bg-blue-600',
    'C#': 'bg-purple-500',
    'Swift': 'bg-orange-400',
    'Kotlin': 'bg-purple-400',
    'Dart': 'bg-blue-400',
    'HTML': 'bg-orange-600',
    'CSS': 'bg-blue-400',
    'Shell': 'bg-green-400',
    'Vue': 'bg-green-600',
    'React': 'bg-cyan-400',
    'Angular': 'bg-red-500',
    'Svelte': 'bg-orange-500'
  };
  
  return languageColors[language || ''] || 'bg-gray-500';
}