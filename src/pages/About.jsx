const About = () => {
    return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <main className="flex-grow">
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trusted by worldwide creators</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            We help developers build better applications faster with our suite of development tools and components.
                        </p>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col bg-gray-400/5 p-8">
                            <dt className="text-sm font-semibold leading-6 text-gray-600">Creators on the platform</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">8,000+</dd>
                        </div>
                        <div className="flex flex-col bg-gray-400/5 p-8">
                            <dt className="text-sm font-semibold leading-6 text-gray-600">Flat platform fee</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">3%</dd>
                        </div>
                        <div className="flex flex-col bg-gray-400/5 p-8">
                            <dt className="text-sm font-semibold leading-6 text-gray-600">Uptime guarantee</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">99.9%</dd>
                        </div>
                        <div className="flex flex-col bg-gray-400/5 p-8">
                            <dt className="text-sm font-semibold leading-6 text-gray-600">Paid out to creators</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">$70M</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
      </main>
    </div>
    );
}

export default About;
