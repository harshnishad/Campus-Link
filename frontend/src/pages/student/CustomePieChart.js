import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import styled from 'styled-components';

const COLORS = ['#0088FE', '#FFBB28'];

const CustomPieChart = ({ data }) => {
    return (
        <StyledPieChart>
            <PieChart width={200} height={200}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    isAnimationActive={true}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </StyledPieChart>
    );
};

const StyledPieChart = styled.div`
    &:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }
`;

export default CustomPieChart;
