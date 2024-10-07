import styles from "./heading.module.css"

export const Heading = () => {
  return (
    <div className={`flex-items-center ${styles["heading"]}`}>
      <h1 className={`uppercase`}>discover our products</h1>
      <h4 className={`text-small text-bold`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia id
      </h4>
      <h4 className={`text-small`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        similique!
      </h4>
    </div>
  );
};
