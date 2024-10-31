import { Link, Outlet } from "react-router-dom";

export default function Analytics() {
  return (
    <div className="bg-slate-400">
      <div className="max-w 4xl mx-auto text-center bg-slate-400 pb-20">
        <p className="text-2xl pt-10 mb-6">Here is the company analytics</p>
        <p className="mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quo
          ad animi dolores dignissimos repellendus tempore mollitia ducimus
          voluptates, ex quae laboriosam dolor numquam autem delectus? Rem
          tempora enim nemo recusandae. Ducimus, consectetur fugiat dignissimos
          consequuntur voluptatum at, quibusdam tempore praesentium illo animi
          ut saepe fugit, dolores quaerat alias eos voluptas iusto
          necessitatibus commodi suscipit possimus vitae excepturi eius! Nihil
          quaerat, ex ullam deserunt repellendus quasi deleniti atque dolor unde
          distinctio quod fuga sequi? Vitae animi inventore quasi nobis nemo
          dolorum modi at ratione explicabo sunt veniam alias numquam placeat,
          voluptates tempora magni. Quo officia hic facilis porro sequi quis.
        </p>
        <nav>
          <Link
            to="/analytics/development"
            className="mx-2 font-semibold text-lg"
          >
            Developent
          </Link>
          <Link
            to="/analytics/cybersecurity"
            className="mx-2 font-semibold text-lg"
          >
            Cyberscurity
          </Link>
          <Link to="/analytics/uiux" className="mx-2 font-semibold text-lg">
            UI/UX
          </Link>
        </nav>
        <Outlet/>
      </div>
    </div>
  );
}
