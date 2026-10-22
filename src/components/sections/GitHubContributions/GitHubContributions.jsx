import { GitHubCalendar } from "react-github-calendar";
import { useDarkMode } from "@/contexts/DarkModeContext";

const GitHubContributions = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <section className="lg:pt-20 pt-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold">
            GitHub Contributions
          </h2>
          <div className="md:w-40 w-20 h-1 border-b-2 border-brand mt-1" />
          <p
            className={`mt-4 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A snapshot of my coding activity over the past year.
          </p>
        </div>

        <div
          className={`overflow-x-auto rounded-xl border p-6 sm:p-8 ${
            isDarkMode
              ? "border-gray-700 bg-gray-800"
              : "border-gray-200 bg-gray-50"
          }`}
        >
          <div className="min-w-[680px] flex justify-center">
            <GitHubCalendar
              username="kalavaguntapurnesh"
              colorScheme={isDarkMode ? "dark" : "light"}
              theme={{
                light: ["#f4f4f5", "#fed7aa", "#fdba74", "#f97316", "#c2410c"],
                dark: ["#27272a", "#7c2d12", "#c2410c", "#f97316", "#fdba74"],
              }}
              blockSize={12}
              blockMargin={4}
              fontSize={14}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions;
