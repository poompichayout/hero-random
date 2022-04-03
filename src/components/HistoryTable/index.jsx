import React from "react";
import { StyledTable, TableWrapper, StyledHeader, StyledRow } from "./style";

const HistoryTable = ({ data }) => {
	return (
		<TableWrapper>
			<h2>History</h2>
			<StyledTable>
				<StyledHeader>
					<StyledRow>
						<td>counter</td>
						<td>Hero characters</td>
					</StyledRow>
				</StyledHeader>
				<tbody>
					{data.map((hero, index) => (
						<StyledRow key={index}>
							<td>{index + 1}</td>
							<td>{hero?.name}</td>
						</StyledRow>
					))}
				</tbody>
			</StyledTable>
		</TableWrapper>
	);
};

export default HistoryTable;
