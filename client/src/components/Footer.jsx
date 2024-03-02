export default function Footer() {
  return (
    <div>
      <ul className="flex flex-wrap justify-center mt-3 text-md font-medium text-gray-500 sm:mt-0 pb-3">
        <li>
          <a
            href="mailto:s.gorkemakan@gmail.com"
            target="_blank"
            className="hover:underline me-4 md:me-6"
          >
            Mail Me
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/SahinGorkemAkan"
            target="_blank"
            className="hover:underline me-4 md:me-6"
          >
            My Facebook
          </a>
        </li>
        <li>
          <a
            href="https://github.com/sgorkemakan"
            target="_blank"
            className="hover:underline me-4 md:me-6"
          >
            My GitHub
          </a>
        </li>
      </ul>
    </div>
  );
}
