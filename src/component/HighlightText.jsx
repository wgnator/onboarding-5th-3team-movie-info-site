import { Fragment } from "react";
import styled from "styled-components";

const TITLE_IDENTIFIER = "!@#";
const TITLE_SEPERATOR = `,${TITLE_IDENTIFIER},`;

function HighlightText({ title, term }) {
  const getOriginalTerm = (term) => title.match(getRegex(term)) ?? "";

  const injectIdentifier = (term) => title.replaceAll(term, TITLE_SEPERATOR);

  const splitTitle = (title) => title.split(",");

  const removeEmptyValue = (splitedTitle) => {
    return !!!splitedTitle[0] ? splitedTitle.slice(1) : splitedTitle;
  };
  
  const [originalTerm] = getOriginalTerm(term);

  // const injectedTitle = injectIdentifier(originalTerm);
  // const split = splitTitle(injectedTitle);
  // const processedTitle = removeEmptyValue(split);

  const processedTitle = removeEmptyValue(
    splitTitle(injectIdentifier(originalTerm))
  );

  return (
    <>
      {processedTitle.map((word, idx) => (
        <Fragment key={idx}>
          {word === TITLE_IDENTIFIER ? (
            <HighlightSpan>{getOriginalTerm(term)[0]}</HighlightSpan>
          ) : (
            <Span>{word}</Span>
          )}
        </Fragment>
      ))}
    </>
  );
}
export default HighlightText;

const HighlightSpan = styled.span`
  color: red;
  background-color: transparent;
`;
const Span = styled.span`
  color: black;
  background-color: transparent;
`;

export const getRegex = (term) => new RegExp(term, "i");
