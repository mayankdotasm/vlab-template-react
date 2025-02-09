export default function Application() {
  const topics = [
    {
      title: "Compiler Design",
      description:
        "Automata theory forms the foundation for designing lexical analyzers and parsers in compilers. Regular expressions, finite automata, and context-free grammars are essential for tokenizing and parsing programming languages.",
    },
    {
      title: "Text Processing",
      description:
        "Pattern matching algorithms (like regular expressions) use finite automata for efficiently searching patterns in strings of text.",
    },
  ];

  return (
    <div>
      {topics.map((topic, index) => (
        <p key={index}>
          <strong>{topic.title}:</strong> {topic.description}
        </p>
      ))}
    </div>
  );
}
