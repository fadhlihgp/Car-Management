import React from "react";
import { Col, Row, Table} from "react-bootstrap";
import {
    DatatableWrapper,
    TableBody,
    TableHeader,
    Pagination,
    PaginationOptions,
    Filter,
} from "react-bs-datatable";

// @ts-ignore
import TABLE_BODY from "./data.json";

interface DataTableProps {
    headers?: Array<{
        prop: string;
        title: string;
        isSortable?: boolean;
        isFilterable?: boolean;
    }>;
    data?: any[]; // Change the type to match your data structure
}

const STORY_HEADERS = [
    {
        prop: "name",
        title: "Name",
        // isFilterable: true
    },
    {
        prop: "username",
        title: "Username",
    },
    {
        prop: "location",
        title: "Location",
    },
    {
        prop: "date",
        title: "Last Update",
    },
    {
        prop: "score",
        title: "Score",
        isSortable: true,
    },
];

const DataTable: React.FC<DataTableProps> = ({ headers = STORY_HEADERS, data = TABLE_BODY }) => {
    return (
        <DatatableWrapper
            body={data}
            headers={headers}
            paginationOptionsProps={{
                initialState: {
                    rowsPerPage: 10,
                    options: [5, 10, 15, 20],
                },
            }}
        >
            <Table hover>
                <TableHeader />
                <TableBody />
            </Table>
            <Row className="mb-2">
                <Col
                    xs={12}
                    sm={6}
                    lg={6}
                    className="d-flex flex-col align-items-center justify-content-sm-start mb-2 mb-sm-0"
                >
                    <PaginationOptions />
                </Col>
                <Col
                    xs={12}
                    sm={6}
                    lg={6}
                    className="d-flex flex-col justify-content-end align-items-end"
                >
                    <Pagination />
                </Col>
            </Row>
        </DatatableWrapper>
    );
};

export default DataTable;
