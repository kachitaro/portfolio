import { useState, useEffect } from 'react';

interface GithubProfile {
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

export function useGithubProfile(username: string) {
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      }
    }
    
    fetchProfile();
  }, [username]);

  return { profile, loading };
}
