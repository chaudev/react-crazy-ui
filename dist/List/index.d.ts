/**
 * @author Nguyen Phuc Bao Chau
 *
 * @create date 2024-09-06 10:32:54
 * @modify date 2024-09-06 17:13:14
 */
import React from "react";
interface ListCrazyProps<T> {
    data: T[];
    RenderItem: React.ComponentType<{
        item: T;
        index: number;
    }>;
    EmptyComponent?: React.ComponentType;
    keyExtractor?: (item: T, index: number) => string;
}
declare const List: <T>({ data, keyExtractor, RenderItem, EmptyComponent, }: ListCrazyProps<T>) => JSX.Element;
export default List;
