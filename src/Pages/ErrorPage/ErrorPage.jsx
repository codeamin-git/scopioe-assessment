
const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops, Page Not Found</h1>
      <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
      <a href="/" className="text-blue-500 hover:underline">
        Go back to the homepage
      </a>
    </div>
    );
};

export default ErrorPage;