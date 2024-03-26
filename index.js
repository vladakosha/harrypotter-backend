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
  {
    id: 4,
    name: "Albus Dumbledore",
    ancestry: "half-blood",
    patronus: "phoenix",
    house: "Gryffindor",
  },
  {
    id: 5,
    name: "Severus Snape",
    ancestry: "half-blood",
    patronus: "doe",
    house: "Slytherin",
  },
  {
    id: 6,
    name: "Draco Malfoy",
    ancestry: "pure-blood",
    patronus: null,
    house: "Slytherin",
  },
  {
    id: 7,
    name: "Luna Lovegood",
    ancestry: "half-blood",
    patronus: 'hare',
    house: "Ravenclaw",
  },
  {
    id: 8,
    name: "Neville Longbottom",
    ancestry: "pure-blood",
    patronus: null,
    house: "Gryffindor",
  },
  {
    id: 9,
    name: "Ginny Weasley",
    ancestry: "pure-blood",
    patronus: "horse",
    house: "Gryffindor",
  },
  {
    id: 10,
    name: "Sirius Black",
    ancestry: "pure-blood",
    patronus: "dog",
    house: 'Gryffindor',
  },
  {
    id: 11,
    name: "Remus Lupin",
    ancestry: "half-blood",
    patronus: "wolf",
    house: "Gryffindor",
  },
  {
    id: 12,
    name: "Bellatrix Lestrange",
    ancestry: "pure-blood",
    patronus: null,
    house: "Slytherin",
  },
  {
    id: 13,
    name: "Lucius Malfoy",
    ancestry: "pure-blood",
    patronus: null,
    house: "Slytherin",
  },
  {
    id: 14,
    name: "Rubeus Hagrid",
    ancestry: "half-giant",
    patronus: null,
    house: "Gryffindor",
  },
  {
    id: 15,
    name: "Minerva McGonagall",
    ancestry: "half-blood",
    patronus: "cat",
    house: "Gryffindor",
  },
  {
    id: 16,
    name: "Cedric Diggory",
    ancestry: "pure-blood",
    patronus: null,
    house: "Hufflepuff",
  },
  {
    id: 17,
    name: "Newton Scamander",
    ancestry: "pure-blood",
    patronus: null,
    house: "Hufflepuff",
  },
  {
    id: 18,
    name: "Cho Chang",
    ancestry: "pure-blood",
    patronus: null,
    house: "Ravenclaw",
  }
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
