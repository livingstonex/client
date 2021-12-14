import React from 'react';

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
// import { isMobile } from '../../utils';

let page = 1;
const onChange = (num) => {
  page = num;
};

const PaginationComponent = ({
  size = 'md',
  onChange = this.onChange,
  page = 1,
  total = 15,
}) => {
  const end = total - page <= 10 ? total : page + 10;
  const start = page > 1 ? page - 1 : page;

  return (
    <div className="p-2">
      <Pagination size={size}>
        <PaginationItem
          disabled={page < 2}
          onClick={() => onChange(page > 1 ? page - 1 : null)}
        >
          <PaginationLink previous />
        </PaginationItem>

        {Array(end - start + 1)
          .fill('')
          .map((_, i) => (
            <PaginationItem
              key={i}
              active={page == i + start}
              onClick={() => onChange(i + start)}
            >
              <PaginationLink>{i + start}</PaginationLink>
            </PaginationItem>
          ))}

        <PaginationItem
          disabled={page > total - 1}
          onClick={() => onChange(page < total ? page + 1 : null)}
        >
          <PaginationLink next />
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;