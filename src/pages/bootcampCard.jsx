// styles.bootcamp.css
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

const styles = {
  card: `
    border border-solid border-gray-300 rounded overflow-hidden w-300 m-20 shadow-md
  `,
  cardImage: `
    w-full h-auto
  `,
  cardContent: `
    p-16
  `,
  cardTitle: `
    m-0
  `,
  cardParagraph: `
    m-8 0
  `,
  cardContainer: `
    flex justify-center items-center
  `,
};

export default styles;
