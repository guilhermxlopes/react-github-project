import Container from "./Container";

const App = () => {
  const github_data = [
    {
      profile_photo: "https://avatars.githubusercontent.com/u/86780871?v=4",
      name: "Guilherme Lopes",
      ig: "@guilhermxlopes",
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
