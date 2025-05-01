"use client"
import { AllCommunityModule, ColDef, ModuleRegistry } from 'ag-grid-community'; 

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
import { AgGridReact } from 'ag-grid-react';
import { useEffect, useState } from 'react';
import { api } from '@/../convex/_generated/api';
import { useQuery } from 'convex/react';

export default function AgGrid() {
  const [rowData, setRowData] = useState<{ name: string; balance: string }[]>([]);
  const players = useQuery(api.player.get_players);


  useEffect(() => {
    if (players) {
      setRowData(players.map((player) => ({
        name: player.name,
        balance: player.balance + "€",
      })));
    }
  }, [players]);

  const colDefs: ColDef<{ name: string; balance: string }>[] = [
      { headerName: "Name", field: "name" },
      { headerName: "Kontostand", field: "balance" },
  ];

  return (
    <div style={{ height: 500, width: "100%" }}>
        <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
        />
    </div>
  )
}