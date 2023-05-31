import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary-500 p-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4">
        <div>
          <img alt="logo" src={Logo} className="mb-5 w-16" />
          <p className="text-xs"></p>
          <p className="mt-2 text-xs">©Zenyo All Rights Reserved.</p>
        </div>
        <div>
          <h4 className="text-md font-medium">Links</h4>
          <ul className="mt-3 space-y-2">
            <li className="text-xs">
              <a href="https://www.mindful.org/meditation/mindfulness-getting-started/">
                Getting Started with Mindfulness
              </a>
            </li>
            <li className="text-xs">
              <a href="https://www.headspace.com/meditation-101/what-is-meditation">
                What is Meditation?
              </a>
            </li>
            <li className="text-xs">
              <a href="https://www.psychologytoday.com/intl/basics/meditation">
                Meditation: An Introduction
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-md font-medium">Contact Us</h4>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            <p className="text-xs">123 Zenyo Street, Zen</p>
            <p className="text-xs">(000) 111-222</p>
            <p className="text-xs">zenyo@example.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
