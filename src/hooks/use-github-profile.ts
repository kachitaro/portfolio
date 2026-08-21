import { useState, useEffect } from 'react';

interface IGithubProfile {
  avatarUrl: string;
  publicRepos: number;
  followers: number;
  following: number;
}

export function useGithubProfile(username: string) {
  const [profile, setProfile] = useState<IGithubProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (res.ok) {
          const data = await res.json();
          setProfile(data);
        }
      } catch (error) {
        console.error('Failed to fetch Github profile:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProfile();
  }, [username]);

  return { profile, isLoading };
}
