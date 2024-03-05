
import Project from '../components/Project'

const myProjects = [{title: 'test', description: '', img:''},{title: 'test2'}]

const Projects = () => {
  return (
    <div>
        <div>{myProjects.map((proj)=>{
            <Project data = {proj}/>
        })}</div>
    </div>
  )
}

export default Projects