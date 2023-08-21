import { Dispatch, SetStateAction } from "react";

interface projectProps {
  setProjectGuide: Dispatch<SetStateAction<boolean>>;
  setResumeGuide: Dispatch<SetStateAction<boolean>>;
  setHighlightedApp: Dispatch<React.SetStateAction<string>>;
}
interface startProps {
  setStartOpen: Dispatch<SetStateAction<boolean>>;
  setContact: Dispatch<SetStateAction<boolean>>;
  setHighlightedApp: Dispatch<React.SetStateAction<string>>;
  setProjectGuide: Dispatch<SetStateAction<boolean>>;
  setResumeGuide: Dispatch<SetStateAction<boolean>>;
}

const projectPopUp = ({
  setProjectGuide,
  setResumeGuide,
  setHighlightedApp,
}: projectProps) => {
  setResumeGuide(false);
  setProjectGuide(true);
  setHighlightedApp("Project: Condensed News");
};

const resumePopUp = ({
  setProjectGuide,
  setResumeGuide,
  setHighlightedApp,
}: projectProps) => {
  setProjectGuide(false);
  setResumeGuide(true);
  setHighlightedApp("Resume");
};

const startPopUp = ({
  setStartOpen,
  setContact,
  setHighlightedApp,
  setProjectGuide,
  setResumeGuide,
}: startProps) => {
  setHighlightedApp("");
  setContact(false);
  setProjectGuide(false);
  setResumeGuide(false);
  setStartOpen(true);
};

const contactPopUp = ({
  setStartOpen,
  setContact,
  setHighlightedApp,
  setProjectGuide,
  setResumeGuide,
}: startProps) => {
  setHighlightedApp("");
  setContact(true);
  setProjectGuide(false);
  setResumeGuide(false);
  setStartOpen(true);
};

export { projectPopUp, resumePopUp, startPopUp, contactPopUp };
