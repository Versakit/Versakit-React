import type { ButtonHTMLAttributes } from "react";
import type { VariantProps } from "tailwind-variants";
import type { buttonVariants } from "./index.variants";

export interface ButtonAccessibilityProps {
  /**
   * ARIA标签，用于屏幕阅读器
   */
  "aria-label"?: string;
  /**
   * 指示按钮是否处于禁用状态
   */
  "aria-disabled"?: boolean;
  /**
   * 指示按钮控制的元素是否展开
   */
  "aria-expanded"?: boolean;
  /**
   * 指示按钮是否有弹出菜单
   */
  "aria-haspopup"?: boolean | "menu" | "listbox" | "tree" | "grid" | "dialog";
  /**
   * 指定按钮控制的元素ID
   */
  "aria-controls"?: string;
  /**
   * 按钮的角色
   */
  role?: string;
}

export interface PassThroughProps {
  /**
   * 传递给组件的自定义属性
   */
  pt?: Record<string, unknown>;
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> &
  ButtonAccessibilityProps &
  PassThroughProps & {
    /**
     * 是否移除默认样式
     */
    unstyled?: boolean;
  };
