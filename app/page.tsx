export default function Home() {
  interface GridItemProps {
    component: React.ElementType;
    width: number;
    height: number;
    [key: string]: any; // Any additional props for the item.
  }

  interface DynamicGridProps {
    items: GridItemProps[];
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Saku Arho</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            {/* About component will go here */}
          </section>

          <section className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            {/* Experience component will go here */}
          </section>

          <section className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            {/* Education component will go here */}
          </section>

          <section className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            {/* Skills component will go here */}
          </section>

          <section className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            {/* Projects component will go here */}
          </section>

          <section className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            {/* Contact component will go here */}
          </section>
        </div>
      </main>

      <footer className="bg-gray-200 py-4 mt-8">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} Saku Arho
        </p>
      </footer>
    </div>
  );
}
