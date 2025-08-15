export default function ClientHeader() {
  return (
    <header className="bg-primary text-primary-foreground shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-foreground text-primary rounded-lg flex items-center justify-center font-bold text-sm">
              GC
            </div>
            <h1 className="text-xl font-semibold">GeoClient</h1>
          </div>
          <div className="text-sm opacity-90">Client Management</div>
        </div>
      </div>
    </header>
  );
}
