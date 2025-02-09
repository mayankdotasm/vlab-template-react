import styles from "./references.module.css";

export default function References() {
  // Add your references here
  const references = [
    {
      author: "Cohen, D. I. A.",
      year: 2011,
      title: "Introduction to Computer Theory",
      edition: "2nd edition",
      publisher: "Wiley India",
    },
    {
      author: "Lewis, H.R. & Papadimitriou, H. R.",
      year: 2002,
      title: "Elements of the Theory of Computation",
      edition: "2nd edition",
      publisher: "Prentice Hall of India (PHI)",
    },
  ];

  return (
    <ul className={styles.referencesList}>
      {references.map((ref, index) => (
        <li key={index} className={styles.referenceItem}>
          <span>
            {ref.author} ({ref.year}). <em>{ref.title}</em>. {ref.edition}.{" "}
            {ref.publisher}.
          </span>
        </li>
      ))}
    </ul>
  );
}
