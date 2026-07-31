import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/ui/ScrollToTop'
import PageTransition from './components/ui/PageTransition'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route
            index
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route
            path="skills"
            element={
              <PageTransition>
                <Skills />
              </PageTransition>
            }
          />
          <Route
            path="projects"
            element={
              <PageTransition>
                <Projects />
              </PageTransition>
            }
          />
          <Route
            path="blog"
            element={
              <PageTransition>
                <Blog />
              </PageTransition>
            }
          />
          <Route
            path="blog/:slug"
            element={
              <PageTransition>
                <BlogPost />
              </PageTransition>
            }
          />
          <Route
            path="contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <AnimatedRoutes />
    </>
  )
}
