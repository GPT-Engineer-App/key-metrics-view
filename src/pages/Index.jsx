import React from "react";
import { Container, VStack, HStack, Box, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, IconButton } from "@chakra-ui/react";
import { FaChartLine, FaDollarSign, FaUsers, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10}>
        <Text fontSize="4xl" fontWeight="bold">
          Business Dashboard
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} width="100%">
          <StatCard icon={FaDollarSign} title="Revenue" value="$50,000" change="+5%" />
          <StatCard icon={FaChartLine} title="Sales" value="1,200" change="-2%" />
          <StatCard icon={FaUsers} title="Customers" value="300" change="+10%" />
          <StatCard icon={FaShoppingCart} title="Orders" value="150" change="+3%" />
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

const StatCard = ({ icon, title, value, change }) => {
  const isPositive = change.startsWith("+");

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
      <HStack spacing={4}>
        <IconButton aria-label={title} icon={React.createElement(icon)} size="lg" isRound />
        <VStack align="start">
          <Stat>
            <StatLabel>{title}</StatLabel>
            <StatNumber>{value}</StatNumber>
            <StatHelpText>
              <StatArrow type={isPositive ? "increase" : "decrease"} />
              {change}
            </StatHelpText>
          </Stat>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Index;
