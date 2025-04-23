export default function Footer() {
    return (
      <footer className="bg-gray-200 text-white py-4">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-center items-center px-4">
          {/* Company Name */}
          <p className="text-sm text-black pr-2">
            © {new Date().getFullYear()} Colossal Carriers - Transportation Services | All rights reserved | 
          </p>
  
          {/* Designer/Builder Credit */}
          <p className="text-sm mt-2 md:mt-0 text-black">
            Designed and built by <a href="https://thehashhobo.github.io/Personal-Website/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Jerry W</a>.
          </p>
        </div>
      </footer>
    );
  }