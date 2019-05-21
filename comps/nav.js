import Link from 'next/link'

const Nav = () => (
  <div className="nav">
    <p> ASMR Radio </p>
    <ul className="links">
      <li> <Link href='/'> home </Link> </li>
      <li> <Link href='/demo' className='link'> demo </Link> </li> 
    </ul>
    <style jsx> {`
      @import url('https://fonts.googleapis.com/css?family=Amiri|Source+Code+Pro');
      .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      }

      p {
      margin-left: .5em;
      font-family: 'Source Code Pro';
      }

      .links {
      font-family: 'Source Code Pro';
      list-style: none;
      display: flex;
      margin-right: .4em;
      text-decoration: none;
      }

      li {
      padding-left: .3em;
      padding-right: .3em;
      }

      
    `} </style>
    </div>
)

export default Nav
