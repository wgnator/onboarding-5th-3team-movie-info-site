import styled from "styled-components";

const TITLE_IDENTIFIER = "!@#";
const TITLE_SEPERATOR = `,${TITLE_IDENTIFIER},`;

function HighlightText({ title, term }) {
  const injectIdentifier = () =>
    title.toLocaleLowerCase().replaceAll(term.toLowerCase(), TITLE_SEPERATOR);

  const splitTitle = (title) => title.split(",");

  const removeEmptyValue = (splitedTitle) => {
    return !!!splitedTitle[0] ? splitedTitle.slice(1) : splitedTitle;
  };

  const injectedTitle = injectIdentifier();
  const split = splitTitle(injectedTitle);
  const processedTitle = removeEmptyValue(split);

  return (
    <>
      {processedTitle.map((word, idx) =>
        word === TITLE_IDENTIFIER ? (
          <HighlightSpan>{term.toLowerCase()}</HighlightSpan>
        ) : (
          <Span>{word}</Span>
        )
      )}
    </>
  );
}
export default HighlightText;

const HighlightSpan = styled.span`
  color: red;
  background-color: transparent;
`;
const Span = styled.span`
  color: inherit;
  background-color: transparent;
`;
