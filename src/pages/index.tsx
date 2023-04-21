import Test from "components/Test";
import { Meta } from "src/layouts/Meta";
import { Main } from "src/templates/Main";

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      {/* <a href="https://github.com/ixartz/Next-js-Boilerplate">
        <img
          src={`${router.basePath}/assets/images/nextjs-starter-banner.png`}
          alt="Nextjs starter banner"
        />
      </a> */}
      <Test />
    </Main>
    // <div className="mx-auto">
    //   <Test />
    // </div>
  );
};

export default Index;
