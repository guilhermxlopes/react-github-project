import Container from "./Container";

const App = () => {
  const github_data = [
    {
      profile_photo: "",
      name: "Guilherme Lopes",
      ig: "guilhermxlopes",
      main_language: "JavaScript",
      tech: "Front-end",
    },
  ];

  return (
    <div>
      <Container items={github_data} />
    </div>
  );
};

export default App;
