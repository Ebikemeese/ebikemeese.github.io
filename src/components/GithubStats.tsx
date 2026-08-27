import React, { useEffect, useState } from "react";
import { styles } from "@/styles";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaUsers,
  FaFolderOpen,
  FaExternalLinkAlt,
  FaBookOpen,
} from "react-icons/fa";
import { motion } from "framer-motion";

interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

const GithubStats: React.FC = () => {
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Track failed image URLs so broken images are safely hidden
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (imgKey: string) => {
    setFailedImages((prev) => ({ ...prev, [imgKey]: true }));
  };

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        // Fetch User Profile from GitHub REST API
        const userRes = await fetch("https://api.github.com/users/Ebikemeese");
        if (!userRes.ok) throw new Error("Failed to fetch GitHub profile");
        const userJson: GitHubUser = await userRes.json();
        setUserData(userJson);

        // Fetch Recent Public Repos
        const reposRes = await fetch(
          "https://api.github.com/users/Ebikemeese/repos?sort=updated&per_page=6",
        );
        if (reposRes.ok) {
          const reposJson: GitHubRepo[] = await reposRes.json();
          setRepos(reposJson);
        }
      } catch (err: any) {
        console.error("Error fetching GitHub stats:", err);
        setError(err.message || "Failed to load live GitHub data");
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <div
      id="github-stats"
      className="bg-[#1b1c2b] px-4 py-16 sm:py-20 relative border-t border-purple/10 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center">
          <p className={styles.sectionSubText}>Live Open Source Activity</p>
          <h2 className={styles.sectionHeadText}>GitHub Stats & Insights.</h2>
          <p className="mt-3 text-secondary text-sm sm:text-base max-w-2xl mx-auto px-2">
            Real-time GitHub metrics dynamically fetched from my public GitHub
            profile.
          </p>
        </div>

        {/* User Profile & Quick Counters */}
        {loading ? (
          <div className="flex justify-center items-center p-8 bg-[#151030] rounded-2xl animate-pulse">
            <div className="text-purple font-semibold text-base sm:text-lg">
              Fetching live GitHub profile...
            </div>
          </div>
        ) : userData ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-[#151030] p-4 sm:p-6 lg:p-8 rounded-3xl border border-purple/20 shadow-2xl w-full overflow-hidden">
            {/* Left Profile Details */}
            <div className="lg:col-span-5 flex flex-col items-center text-center border-b lg:border-b-0 lg:border-r border-purple/20 pb-6 lg:pb-0 lg:pr-6 gap-4">
              {!failedImages["avatar"] ? (
                <img
                  src={userData.avatar_url}
                  alt={userData.name || userData.login}
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full border-2 border-purple shadow-xl object-cover shrink-0"
                  onError={() => handleImageError("avatar")}
                />
              ) : (
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full border-2 border-purple bg-purple/20 flex items-center justify-center text-purple text-3xl sm:text-4xl shadow-xl shrink-0">
                  <FaGithub />
                </div>
              )}

              <div className="flex flex-col items-center w-full min-w-0">
                <h3 className="text-white text-xl sm:text-2xl font-bold truncate max-w-full">
                  {userData.name || userData.login}
                </h3>
                <a
                  href={userData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple text-sm hover:underline items-center gap-1 mt-1 font-semibold break-all"
                >
                  @{userData.login}{" "}
                  <FaExternalLinkAlt className="text-xs shrink-0" />
                </a>
                <p className="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed max-w-md break-words">
                  {userData.bio || "Passionate Full-Stack & Web Explorer"}
                </p>

                <a
                  href={userData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs rounded-xl shadow-md transition-all w-full sm:w-auto"
                >
                  <FaGithub className="text-base" /> Visit GitHub Profile
                </a>
              </div>
            </div>

            {/* Right Metric Stat Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-[#252838] p-4 rounded-2xl border border-purple/10 flex flex-col justify-between shadow-md">
                <div className="text-purple text-2xl">
                  <FaFolderOpen />
                </div>
                <div className="mt-3">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                    {userData.public_repos}
                  </div>
                  <div className="text-xs text-gray-400 font-medium mt-1">
                    Public Repositories
                  </div>
                </div>
              </div>

              <div className="bg-[#252838] p-4 rounded-2xl border border-purple/10 flex flex-col justify-between shadow-md">
                <div className="text-cyan-400 text-2xl">
                  <FaUsers />
                </div>
                <div className="mt-3">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                    {userData.followers}
                  </div>
                  <div className="text-xs text-gray-400 font-medium mt-1">
                    Followers
                  </div>
                </div>
              </div>

              <div className="bg-[#252838] p-4 rounded-2xl border border-purple/10 flex flex-col justify-between shadow-md col-span-1 xs:col-span-2 sm:col-span-1">
                <div className="text-yellow-400 text-2xl">
                  <FaStar />
                </div>
                <div className="mt-3">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                    {repos.reduce(
                      (acc, repo) => acc + repo.stargazers_count,
                      0,
                    )}
                  </div>
                  <div className="text-xs text-gray-400 font-medium mt-1">
                    Recent Stars
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : error ? (
          <div className="text-center text-red-400 text-sm p-4 bg-[#151030] rounded-xl">
            {error}
          </div>
        ) : null}

        {/* GitHub Stats Cards with Protection Check (Only render if available) */}
        {(!failedImages["readme-stats"] || !failedImages["streak-stats"]) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {!failedImages["readme-stats"] && (
              <div className="bg-[#151030] p-4 sm:p-6 rounded-3xl border border-purple/20 flex flex-col items-center justify-center shadow-xl overflow-hidden">
                <h4 className="text-white text-sm font-semibold mb-4 text-center">
                  GitHub Readme Stats
                </h4>
                <img
                  src="https://github-readme-stats.vercel.app/api?username=Ebikemeese&theme=radical&hide_border=false&include_all_commits=true"
                  alt="Ebikeme's GitHub Stats"
                  className="w-full max-w-full h-auto object-contain rounded-xl"
                  loading="lazy"
                  onError={() => handleImageError("readme-stats")}
                />
              </div>
            )}

            {!failedImages["streak-stats"] && (
              <div className="bg-[#151030] p-4 sm:p-6 rounded-3xl border border-purple/20 flex flex-col items-center justify-center shadow-xl overflow-hidden">
                <h4 className="text-white text-sm font-semibold mb-4 text-center">
                  GitHub Streak Stats
                </h4>
                <img
                  src="https://github-readme-streak-stats.herokuapp.com/?user=Ebikemeese&theme=radical&hide_border=false"
                  alt="Ebikeme's GitHub Streak"
                  className="w-full max-w-full h-auto object-contain rounded-xl"
                  loading="lazy"
                  onError={() => handleImageError("streak-stats")}
                />
              </div>
            )}
          </div>
        )}

        {/* Top Languages & Activity Graph with Protection Check */}
        {(!failedImages["top-langs"] || !failedImages["activity-graph"]) && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {!failedImages["top-langs"] && (
              <div
                className={`bg-[#151030] p-4 sm:p-6 rounded-3xl border border-purple/20 flex flex-col items-center justify-center shadow-xl overflow-hidden ${
                  failedImages["activity-graph"]
                    ? "lg:col-span-12"
                    : "lg:col-span-5"
                }`}
              >
                <h4 className="text-white text-sm font-semibold mb-4 text-center">
                  Most Used Languages
                </h4>
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=Ebikemeese&theme=radical&hide_border=false&layout=compact"
                  alt="Top Languages"
                  className="w-full max-w-full h-auto object-contain rounded-xl"
                  loading="lazy"
                  onError={() => handleImageError("top-langs")}
                />
              </div>
            )}

            {!failedImages["activity-graph"] && (
              <div
                className={`bg-[#151030] p-4 sm:p-6 rounded-3xl border border-purple/20 flex flex-col items-center justify-center shadow-xl overflow-hidden ${
                  failedImages["top-langs"] ? "lg:col-span-12" : "lg:col-span-7"
                }`}
              >
                <h4 className="text-white text-sm font-semibold mb-4 text-center">
                  GitHub Contribution Graph
                </h4>
                <img
                  src="https://github-readme-activity-graph.vercel.app/graph?username=Ebikemeese&theme=react-dark"
                  alt="Activity Graph"
                  className="w-full max-w-full h-auto object-contain rounded-xl"
                  loading="lazy"
                  onError={() => handleImageError("activity-graph")}
                />
              </div>
            )}
          </div>
        )}

        {/* Dynamically Pushed Repositories */}
        {repos.length > 0 && (
          <div className="pt-6">
            <div className="flex items-center gap-2 mb-6">
              <FaBookOpen className="text-purple text-lg" />
              <h3 className="text-white text-lg sm:text-xl font-bold">
                Recently Updated Repositories (Live API)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo) => (
                <motion.div
                  key={repo.id}
                  whileHover={{ y: -4 }}
                  className="bg-[#151030] p-5 rounded-2xl border border-purple/20 flex flex-col justify-between shadow-lg hover:border-purple/50 transition-all"
                >
                  <div>
                    <div className="flex justify-between items-center">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple font-bold text-base hover:underline flex items-center gap-1.5"
                      >
                        {repo.name} <FaExternalLinkAlt className="text-xs" />
                      </a>
                    </div>
                    <p className="text-gray-300 text-xs mt-2 line-clamp-2 leading-relaxed">
                      {repo.description || "No description provided."}
                    </p>
                  </div>

                  <div className="mt-6 flex justify-between items-center text-xs text-gray-400 border-t border-purple/10 pt-3">
                    {repo.language && (
                      <span className="px-2 py-0.5 rounded bg-purple/10 text-purple font-medium">
                        {repo.language}
                      </span>
                    )}
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <FaStar className="text-yellow-400 text-xs" />{" "}
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCodeBranch className="text-cyan-400 text-xs" />{" "}
                        {repo.forks_count}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GithubStats;
