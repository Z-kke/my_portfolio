export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Saku Arho</h1>
      </main>

      <footer className="bg-gray-200 py-4 mt-8">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} Saku Arho
        </p>
      </footer>
    </div>
  );
}
