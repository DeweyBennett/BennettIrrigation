import NextLink from 'next/link';
import { Link as MenuLink } from 'react-scroll';
import { IoIosArrowForward } from 'react-icons/io';
import { keyframes } from '@emotion/react';

export function NavLink({ path, label, children, ...rest }) {
    return (
      <MenuLink
        to={path}
        spy={true}
        offset={-70}
        smooth={true}
        duration={500}
        className="nav-item text-heading cursor-pointer active:text-primary"
        activeClass=""
        {...rest}
      >
        {label}
      </MenuLink>
    );
  }
  
  export function Link({ path, label, children, ...rest }) {
    return (
      <NextLink href={path}>
        <a {...rest}>{children ? children : label}</a>
      </NextLink>
    );
  }
  
export function LearnMore({ path, label, children, ...rest }) {
    return (
      <NextLink href={path}>
        <a className={`inline-flex items-center text-link text-lg font-semibold`} {...rest}>
          {label ?? 'Learn More'} <IoIosArrowForward size="16px" className={`transform translate-x-1 w-[16px] hover:${fadeRight} duration-500 ease-linear`} />
        </a>
      </NextLink>
    );
}

const fadeRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-5px);
  }
  to: {
    opacity: 1;
  }
`;