import React from 'react';

const Videos = () => {
  return (
    <>
      <section data-name="Videos">
        <div className="row">
          video
        </div>
      </section>
    </>
  );
};

// skip re-rendering the component
export default React.memo(Videos, () => true);
