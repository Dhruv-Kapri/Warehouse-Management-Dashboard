import { useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
  rem,
  keys,
} from "@mantine/core";
import {
  IconSelector,
  IconChevronDown,
  IconChevronUp,
  IconSearch,
} from "@tabler/icons-react";
import cx from "clsx";
import classes from "./Products.module.css";
import { productData } from "./ProductData";
productData;

const Th = ({ children, reversed, sorted, onSort }) => {
  const Icon = sorted ? (
    reversed ? (
      <IconChevronUp />
    ) : (
      <IconChevronDown />
    )
  ) : (
    <IconSelector />
  );
  return (
    <Table.Th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>{Icon}</Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
};

Th.propTypes = {
  children: PropTypes.node,
  reversed: PropTypes.bool,
  sorted: PropTypes.bool,
  onSort: PropTypes.func,
};

const filterData = (data, search) => {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
  );
};

const sortData = (data, payload) => {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (sortBy === "quantity") {
        // For numeric sorting (quantity), convert the values to numbers
        const quantityA = parseFloat(a[sortBy]);
        const quantityB = parseFloat(b[sortBy]);

        if (payload.reversed) {
          return quantityB - quantityA;
        }

        return quantityA - quantityB;
      } else {
        if (payload.reversed) {
          return b[sortBy].localeCompare(a[sortBy]);
        }

        return a[sortBy].localeCompare(b[sortBy]);
      }
    }),
    payload.search
  );
};

const data = productData;

const Product = () => {
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const setSorting = (field) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(data, { sortBy, reversed: reverseSortDirection, search: value })
    );
  };

  const rows = sortedData.map((row) => (
    <Table.Tr key={row.name}>
      <Table.Td>{row.name}</Table.Td>
      <Table.Td>{row.quantity}</Table.Td>
      <Table.Td>{row.arrival}</Table.Td>
      <Table.Td>{row.dispatch}</Table.Td>
      <Table.Td>{row.status}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Card shadow="xs" radius="md" padding="md">
      <h2>Products</h2>
      <ScrollArea
        h={300}
        onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
      >
        <TextInput
          className={cx(classes.header, { [classes.scrolled]: scrolled })}
          placeholder="Search by any field"
          mb="md"
          leftSection={
            <IconSearch
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
          value={search}
          onChange={handleSearchChange}
        />
        <Table
          horizontalSpacing="md"
          verticalSpacing="xs"
          miw={700}
          layout="fixed"
        >
          <Table.Thead
            className={cx(classes.header, { [classes.scrolled]: scrolled })}
          >
            <Table.Tr>
              <Th
                sorted={sortBy === "name"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("name")}
              >
                Name
              </Th>
              <Th
                sorted={sortBy === "quantity"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("quantity")}
              >
                Quantity
              </Th>
              <Th
                sorted={sortBy === "arrival"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("arrival")}
              >
                Arrival Date
              </Th>
              <Th
                sorted={sortBy === "dispatch"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("dispatch")}
              >
                Dispatch Date
              </Th>
              <Th
                sorted={sortBy === "status"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("status")}
              >
                Status
              </Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {rows.length > 0 ? (
              rows
            ) : (
              <Table.Tr>
                <Table.Td colSpan={Object.keys(data[0]).length}>
                  <Text fw={500} ta="center">
                    Nothing found
                  </Text>
                </Table.Td>
              </Table.Tr>
            )}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </Card>
  );
};

Product.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      quantity: PropTypes.number,
      arrival: PropTypes.string,
      dispatch: PropTypes.string,
      status: PropTypes.oneOf(["Arrival", "In-store", "Dispatch"]),
    })
  ),
};

export default Product;
