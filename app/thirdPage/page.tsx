import styles from "@/styles/kirby.module.css";

import Button from "@/components/button";

const Page = () => {
  
  return (
    <div className="bg-[url('@/public/clouds.png')] h-[100vh] bg-cover flex flex-row justify-around mt-[-70px]">
      <div className="relative top-32 left-36 z-10 h-52">
        <div className={styles.body}>
          <div className={styles.face}>
            <div className={styles.eyes}>
              <div className={styles.eyeRight}>
                <div className={styles.eyeBottom}></div>
              </div>
              <div className={styles.eyeLeft}>
                <div className={styles.eyeBottom}></div>
              </div>
            </div>

            <div className={styles.cheeks}>
              <div className={styles.cheekLeft}></div>
              <div className={styles.cheekRight}></div>
            </div>

            <div className={styles.mouth}></div>
          </div>
          <div className={styles.armLeft}></div>
          <div className={styles.armRight}></div>
          <div className={styles.footLeft}></div>
          <div className={styles.footRight}></div>
        </div>
      </div>
      <div className="flex flex-col justify-start p-5 bg-white relative top-64 right-16 h-[24%] w-[26%] rounded-r-3xl rounded-bl-3xl">
        <p className="mb-7 text-2xl font-medium">
          Oh, Hi!!
          <br />I am Kirby, Let's chat!
        </p>
       <div>
   
     
      </div>
         </div>
    </div>
  );
};

export default Page;
