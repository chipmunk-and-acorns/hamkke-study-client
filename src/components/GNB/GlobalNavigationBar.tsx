import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

const GlobalNavigationBar = () => {
  return (
    <nav style={ContainerStyle}>
      <LeftMenu />
      <RightMenu />
    </nav>
  );
};

const ContainerStyle = {
  width: '100%',
  py: '1rem',
  px: '4rem',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export default GlobalNavigationBar;
