import styles from "./paginations.module.css";

const Paginations = () => {
  return (
    <div className={` ${styles.buttons}   p-2.5 flex justify-between`}>
      <button className="" disabled>
        Previous
      </button>
      <button> Next</button>
    </div>
  );
};

export default Paginations;
