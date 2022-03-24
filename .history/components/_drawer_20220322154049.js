import React, { Fragment } from 'react';
import RcDrawer from 'rc-drawer';

export default function Drawer({
    className,
    children,
    closeButton,
    closeButtonStyle,
    drawerHandler,
    toggleHandler,
    open,
    width,
    placement,
    drawerStyle,
    closeBtnStyle,
    ...props}){

    return(
        <Fragment>
            <RcDrawer
                open={open}
                onClose={toggleHandler}
                className={`drawer ${className ? className : ''}`.trim()}
                width={width}
                placement={placement}
                handler={false}
                level={null}
                duration="0.4s"
                {...props}
            >
                {closeButton && (
                <div as="div" onClick={toggleHandler} sx={closeBtnStyle}>
                    {closeButton}
                </div>
                )}
                <div sx={drawerStyle}>{children}</div>
            </RcDrawer>
            <div
                className="drawer__handler inline-block"
                style={{ display: 'inline-block' }}
                onClick={toggleHandler}
            >
                {drawerHandler}
            </div>
        </Fragment>
    );
};

Drawer.defaultProps = {
  width: '320px',
  placement: 'left',
};