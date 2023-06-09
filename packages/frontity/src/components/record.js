import { connect, styled } from "frontity";

const Record = ({ state, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const record = state.source[data.type][data.id];
  console.log("Record object:", record);
  const {year, artist, title: { rendered: titleRendered}, content: { rendered: contentRendered} } = record

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Container type={data.type}>
      <div>
        <Title dangerouslySetInnerHTML={{ __html: record.title.rendered }} />
        <SubTitle>{record.artist} - {record.year}</SubTitle>
      </div>

      {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
      <Content>
        <Html2React html={record.content.rendered} />
      </Content>
    </Container>
  ) : null;
};

export default connect(Record);

const Container = styled.div`
  width: 800px;
  margin: 0;
  padding: 24px;
  background: ${({type}) => type === 'record' ? '#FCBF49' : '#003049' };
  color: ${({type}) => type === 'record' ? '#000' : '#FFF' };
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
`;

const SubTitle = styled.h3`
  margin: 0;
  margin-bottom: 8px;
`;


/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  word-break: break-word;
  * {
    max-width: 100%;
  }
  p {
    line-height: 1.6em;
  }
  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;
    figcaption {
      font-size: 0.7em;
    }
  }
  iframe {
    display: block;
    margin: auto;
  }
  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }
  a {
    color: rgb(31, 56, 197);
    text-decoration: underline;
  }
  /* Input fields styles */
  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;
    &:focus {
      outline-color: #1f38c5;
    }
  }
  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }
  /* WordPress Core Align Classes */
  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }
    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    .alignright {
      float: right;
      margin-left: 24px;
    }
    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;