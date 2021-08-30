import Layout from '../components/Layout'

export default function index() {
  return (
    <Layout>
      <div className="mx-10">
        <header className="mt-10">
          <h2 className="text-5xl font-semibold">Recipes</h2>
          <h3 className="text-lg mt-3 text-red-500">d2yfood</h3>
        </header>

        <div className="">
          <h4 className="text-xl mt-10 font-semibold mb-5 border-l-4 pl-1 pb-1 border-red-500">Latest Recipes</h4>
          <hr />
          {/* Card go here */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="shadow-lg hover:shadow-2xl rounded-lg my-10">
              <img src="/sup.jpg" alt="Food" className="object-cover h-48 md:h-60 w-full rounded-t-lg" />
              <div className="p-5">
                <span>5 Been Chilli Stew</span>
                <span>Recipe By Mhunawar</span>
              </div>
            </div>
            <div className="shadow-lg hover:shadow-2xl rounded-lg my-10">
              <img src="/food.jpg" alt="Food" className="object-cover h-48 md:h-60 w-full rounded-t-lg" />
              <div className="p-5">
                <span>5 Been Chilli Stew</span>
                <span>Recipe By Mhunawar</span>
              </div>
            </div>
            <div className="shadow-lg hover:shadow-2xl rounded-lg my-10">
              <img src="/burg.jpg" alt="Food" className="object-cover h-48 md:h-60 w-full rounded-t-lg" />
              <div className="p-5">
                <span>5 Been Chilli Stew</span>
                <span>Recipe By Mhunawar</span>
              </div>
            </div>
          </div>

          <h4 className="text-xl mt-20 font-semibold mb-5 border-l-4 pl-1 pb-1 border-red-500">Most Popular</h4>
          <hr />
          {/* Card go here */}
          <div className="shadow-lg rounded-lg my-10">
            <img src="/sup.jpg" alt="Food" className="object-cover h-48 md:h-80 w-full rounded-t-lg" />
            <div className="p-5">
              <span>5 Been Chilli Stew</span>
              <span>Recipe By Mhunawar</span>
            </div>
          </div>
          <div className="shadow-lg rounded-lg my-10">
            <img src="/burg.jpg" alt="Food" className="object-cover h-48 md:h-80 w-full rounded-t-lg" />
            <div className="p-5">
              <span>5 Been Chilli Stew</span>
              <span>Recipe By Mhunawar</span>
            </div>
          </div>


        </div>
      </div>
    </Layout>
  )
}
