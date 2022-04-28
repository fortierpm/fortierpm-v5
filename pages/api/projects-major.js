import projectsMajor from "../../constants/projects-major.json";

export default function handler(req, res) {
  res.status(200).json(projectsMajor);
}

// CANNOT USE WITH `next export`