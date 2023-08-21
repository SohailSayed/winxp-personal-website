import { Dispatch, SetStateAction } from "react";

interface projectProps {
  setProjectGuide: Dispatch<SetStateAction<boolean>>;
  setResumeGuide: Dispatch<SetStateAction<boolean>>;
  setHighlightedApp: Dispatch<React.SetStateAction<string>>;
  setMaximizedStates: Dispatch<React.SetStateAction<Record<string, boolean>>>;
}
interface startProps {
  setStartOpen: Dispatch<SetStateAction<boolean>>;
  setContact: Dispatch<SetStateAction<boolean>>;
  setHighlightedApp: Dispatch<React.SetStateAction<string>>;
  setProjectGuide: Dispatch<SetStateAction<boolean>>;
  setResumeGuide: Dispatch<SetStateAction<boolean>>;
  setMaximizedStates: Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

const projectPopUp = ({
  setProjectGuide,
  setResumeGuide,
  setHighlightedApp,
  setMaximizedStates,
}: projectProps) => {
  setMaximizedStates((prevState) => ({
    ...prevState,
    ["Welcome Guide"]: false,
  }));

  setResumeGuide(false);
  setProjectGuide(true);
  setHighlightedApp("Project: Condensed News");
};

const resumePopUp = ({
  setProjectGuide,
  setResumeGuide,
  setHighlightedApp,
  setMaximizedStates,
}: projectProps) => {
  setMaximizedStates((prevState) => ({
    ...prevState,
    ["Welcome Guide"]: false,
  }));

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
  setMaximizedStates,
}: startProps) => {
  setMaximizedStates((prevState) => ({
    ...prevState,
    ["Welcome Guide"]: false,
  }));

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
  setMaximizedStates,
}: startProps) => {
  setMaximizedStates((prevState) => ({
    ...prevState,
    ["Welcome Guide"]: false,
  }));

  setHighlightedApp("");
  setContact(true);
  setProjectGuide(false);
  setResumeGuide(false);
  setStartOpen(true);
};

export { projectPopUp, resumePopUp, startPopUp, contactPopUp };
