import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]  text-center p-4">
      <h1 className="text-4xl font-bold text-primary mb-4">
        Oops! Something went wrong.
      </h1>
      <p className="text-lg text-secondary mb-8">
        We're sorry for the inconvenience. Please try refreshing the page.
      </p>

      <a
        href="/"
        className="px-6 py-3 btn btn-accent text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
      >
        Refresh Page
      </a>
      <details className="mt-4 text-left p-4 bg-gray-200 rounded-lg">
        <summary className="cursor-pointer">Error Details</summary>
        <pre className="mt-2 text-sm text-gray-600 whitespace-pre-wrap">
          {error}
        </pre>
      </details>
    </div>
  );
  // <h4 className="font-bold text-4xl">ErrorElement</h4>;
};

export default ErrorElement;
