import express from "express";
import cors from "cors";

const app = express();
const port = 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const myWizards = [
  {
    id: 1,
    name: "Harry Potter",
    ancestry: "half-blood",
    patronus: "stag",
    house: "Gryffindor",
  },
  {
    id: 2,
    name: "Hermione Granger",
    ancestry: "muggleborn",
    patronus: "otter",
    house: "Gryffindor",
  },
  {
    id: 3,
    name: "Ron Weasley",
    ancestry: "pure-blood",
    patronus: "dog",
    house: "Gryffindor",
  },
];

app.get("/", (request, response) => {
  response.send("hi");
});

app.get("/wizards", (request, response) => {
  response.json(myWizards);
});

app.get("/wizards/:wizardID", (request, response) => {
  const wizardID = request.params.wizardID;
  const wizard = myWizards.find((wizard) => wizard.id == wizardID);
  response.json(wizard);
});

app.post("/wizards", (request, response) => {
  console.log(request.body);
  const newWizard = {
    id: myWizards.length + 1,
    name: request.body.name,
    house: request.body.house,
    patronus: request.body.patronus,
  };
  myWizards.push(newWizard);
  response.json(myWizards);
});

app.listen(port, () => console.log("Server running on port", port));
