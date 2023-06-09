// File: /packages/my-first-theme/src/components/index.js
import Switch from "@frontity/components/switch"
import React from "react"
import { connect, Global, css, styled } from "frontity"
import Link from "@frontity/components/link"
import List from "./list"
import Post from "./post"
import Page from "./page"
import Team from "./team" 
import Loading from "./loading"
import Error from "./error"
import Record from "./record"

const Root = ({ state }) => {
    const data = state.source.get(state.router.link)
  return (
    <>
    <Global
        styles={css`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
            html {
                font-family: system-ui, Verdana, Arial, sans-serif;
            }
        `} 
    />
    <Header isPostType={data.isPostType} isPage={data.isPage}>
    <HeaderContent>
      <h1>Hello Frontity</h1>
      { state.theme.isUrlVisible ? <p>Current URL: {state.router.link}</p> : null }
      <Menu>
        <Link link="/">Home</Link>
        <Link link="/team">Teams</Link>
        <Link link="/about-us">About Us</Link>
        <Link link="/record">Records</Link>

      </Menu>
      </HeaderContent>
      </Header>
      <Main>
        <Switch>
            <Loading when={data.isFetching} />
            <List when={data.isArchive} />
            {/* <ListRecords when={data.isRecordCat || data.isRecordArchive} /> */}
            <Post when={data.isPost} />
            <Page when={data.isPage} />
            <Team when={data.isTeam} />
            <Record when={data.isRecord} />
            <Error when={data.isError} />
        </Switch>
      </Main>
    </>
  )
}

export default connect(Root)

const Header = styled.header`
    background-color: #e5edee;
    border-width: 0 0 8px 0;
    border-style: solid;
    border-color: ${ props => props.isPostType ? ( props.isPage ? 'lightsteelblue' : 'lightseagreen' ) : 'maroon'};    
    h1{
        color: #4a4a4a;
    }
`
const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
`
const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;

  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  & > a {
    margin-right: 1em;
    color: steelblue;
    text-decoration: none;
  }
`
    