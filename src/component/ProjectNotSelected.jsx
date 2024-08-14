import noprojectimg from '../assets/no-projects.png';
import Button from './Button';

export default function ProjectNotSelectd( {onStartAddProject}) {
    return (
        <div className="mt-24 text-center lg:2/3">
            <img src={noprojectimg} alt='Empty projects' className='w-16 h-16 mx-auto'/>
            <h2 className='text-xl font-bold text-stone-500 my-4'>No Selected Project</h2>
            <p className='mb-4'>Select a project or get started with a new one</p>
            <p>
                <Button onClick={onStartAddProject}>Create new project</Button>
            </p>
        </div>
    );
}
