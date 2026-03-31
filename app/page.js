export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-800">
      <section className="relative h-[70vh] flex items-center justify-center text-center px-6">
        <img src="/hero.jpg" alt="La Buàt" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-4">La Buàt per ogni momento</h1>
          <p className="text-xl mb-6">Colazioni, pranzo a buffet, pizza e apericena nel cuore di Bologna</p>
          <a href="https://instagram.com/la_buat_" className="bg-white text-black px-6 py-3 rounded-2xl font-semibold">Prenota ora</a>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
        {[
          ['☕','Colazioni'],
          ['🍽️','Pranzo a buffet'],
          ['🍕','Pizza'],
          ['🥂','Apericena']
        ].map(([icon,title]) => (
          <div key={title} className="bg-white rounded-2xl shadow p-6 text-center">
            <div className="text-4xl mb-3">{icon}</div>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
        ))}
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Dove siamo</h2>
        <iframe
          src="https://www.google.com/maps?q=Via%20Magazzari%205%20Bologna&output=embed"
          className="w-full h-96 rounded-2xl"
        />
      </section>
    </main>
  )
}
